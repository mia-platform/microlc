import type { CompleteConfig } from '../config'
import type MicroLC from '../micro-lc'

export function appendMountPoint(
  this: MicroLC,
  pluginMountPointSelector: CompleteConfig['settings']['pluginMountPointSelector']
): string | HTMLElement {
  let mountPoint: string | HTMLElement = pluginMountPointSelector.id
  if (this.isShadowDom()) {
    const { id, slot } = typeof pluginMountPointSelector === 'object'
      ? pluginMountPointSelector
      : { id: pluginMountPointSelector, slot: undefined }
    mountPoint = this.ownerDocument.createElement('div')
    mountPoint.setAttribute('id', id)
    slot && mountPoint.setAttribute('slot', slot)

    this.appendChild(mountPoint)
  }

  return mountPoint
}
