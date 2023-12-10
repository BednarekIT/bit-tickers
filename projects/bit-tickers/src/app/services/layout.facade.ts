import {computed, Injectable, signal} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LayoutFacade {
  private state = signal({
    toggledMenu: false as boolean
  })

  readonly toggledMenu = computed(() => this.state().toggledMenu);

  toggleMenu(): void {
    this.state.update(state => ({...state, toggledMenu: !state.toggledMenu}))
  }
}
