import { Injectable, signal } from '@angular/core';

interface IResourceBaseObject {
  id?: number;
}

type ResourceType<T> = T & IResourceBaseObject;

@Injectable({
  providedIn: 'root',
})
export abstract class BaseResourceService<T> {
  protected resources = signal<ResourceType<T>[]>([]);

  protected setResources(resources: ResourceType<T>[]) {
    this.resources.set(resources);
  }

  public insertResource(item: ResourceType<T>, targetSignal = this.resources) {
    if (this.isStringResource(item)) {
      if (!targetSignal().includes(item as any)) {
        targetSignal.set([...targetSignal(), item]);
      }
    } else {
      const post = item;
      const index = targetSignal().findIndex(
        (resource: any) => resource.id === post.id
      );

      if (index !== -1) {
        const updatedResources = [...targetSignal()];
        updatedResources[index] = post;
        targetSignal.set(updatedResources);
        return;
      }

      targetSignal.set([...targetSignal(), post]);
    }
  }

  private isStringResource(item: T): boolean {
    return typeof item === 'string';
  }

  private insertStringResource(item: string) {
    if (!this.resources().includes(item as unknown as ResourceType<T>)) {
      this.resources.set([
        ...this.resources(),
        item as unknown as ResourceType<T>,
      ]);
    }
  }

  private insertObjectResource(item: T) {
    const resourceItem = item as ResourceType<T>;
    const index = this.findResourceIndex(resourceItem.id!);
    if (index !== -1) {
      this.updateResourceAtIndex(resourceItem, index);
    } else {
      this.appendResource(resourceItem);
    }
  }

  private findResourceIndex(id: number): number {
    return this.resources().findIndex((resource: any) => resource.id === id);
  }

  private updateResourceAtIndex(resource: ResourceType<T>, index: number) {
    const updatedResources = [...this.resources()];
    updatedResources[index] = resource;
    this.resources.set(updatedResources);
  }

  private appendResource(resource: ResourceType<T>) {
    this.resources.set([...this.resources(), resource]);
  }

  public removeResource(
    item: ResourceType<T> | string,
    targetSignal = this.resources
  ) {
    if (typeof item === 'string') {
      this.removeStringResource(item, targetSignal);
    } else {
      if (item.id !== undefined) {
        this.removeObjectResource(item.id, targetSignal);
      }
    }
  }

  private removeStringResource(
    item: string,
    targetSignal: typeof this.resources
  ) {
    const index = targetSignal().indexOf(item as unknown as ResourceType<T>);
    if (index > -1) {
      const updatedResources = [...targetSignal()];
      updatedResources.splice(index, 1);
      targetSignal.set(updatedResources);
    }
  }

  private removeObjectResource(
    id: number,
    targetSignal: typeof this.resources
  ) {
    targetSignal.mutate((resources) =>
      resources.filter((resource: any) => resource.id !== id)
    );
  }
}
