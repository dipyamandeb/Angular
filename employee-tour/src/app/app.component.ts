import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'employee-tour';
  _employee = [];
  constructor(private employeeService: EmployeeService) { }



  ngOnInit(): void {
        this.employeeService.getEmployee()
      .subscribe(data => this._employee = data);
  }

}
