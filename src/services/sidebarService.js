import { BehaviorSubject } from 'rxjs';

const sidebarVisibility = new BehaviorSubject(true);

export const toggleSidebarVisibility = () => {
  sidebarVisibility.next(!sidebarVisibility.value);
};

export const sidebarVisibility$ = sidebarVisibility.asObservable();
