import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'realtime-demo';
  students: any[];
  constructor(db: AngularFireDatabase){
    db.list('/students').valueChanges() // treat it like Observable
      .subscribe(students => {
        this.students = students;
        console.log(this.students);
    }, err=>{
      console.log(err);
    }
    )
  }
}
