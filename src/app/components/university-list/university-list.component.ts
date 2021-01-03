import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.css']
})
export class UniversityListComponent implements OnInit {

  public universityList: any[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("http://localhost:1337/universities").subscribe(
      result => {
        this.universityList = result
      },
      error => {
        console.log(error);
      }
    )
  }
  deleteUniversity(university: any) {

    let indice = this.universityList.indexOf(university)
    this.universityList.splice(indice, 1)

    this.http.delete<any>("http://localhost:1337/universities" + university.id).subscribe(
      result => {
        console.log(result);
      },
      error => {
        console.log(error);
      }
    )


  }

}
