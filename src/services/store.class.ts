// import { series } from '../components/data.js';
// import { iComponent } from '../interfaces/component.js';

// export class StoreClass {
//     store: string;
//     constructor() {
//         this.store = 'Tasks';
//     }

//     getTasks(): Array<iComponent> {
//         return localStorage.getItem(this.store)
//             ? JSON.parse(<string>localStorage.getItem(this.store))
//             : series;
//     }

//     setTasks(series: Array<iComponent>) {
//         localStorage.setItem(this.store, JSON.stringify(series));
//     }

//     deleteTasks() {
//         localStorage.removeItem(this.store);
//     }
// }
