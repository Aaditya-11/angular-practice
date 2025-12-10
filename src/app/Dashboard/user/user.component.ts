import { Component, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
// user child to register parent
  // @Output() getUsers=new EventEmitter<string[]>();
  // users=['abc','def','ghi','jkl','mno'];
  // customers=['yoyo','aditya','rahul','keshav'];

  // passUsers() {
  //   this.getUsers.emit(this.users);
  // }

  // passCustomers(){
  //   this.getUsers.emit(this.customers);
  // }


// Child to Parent child as usercomponent parent as registercomponent
  @Output() childEvent = new EventEmitter<string>();
  clickChild(){
    this.childEvent.emit('Hello from User');
  }

}
