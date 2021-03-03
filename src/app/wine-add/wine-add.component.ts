import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WinesService } from './../wine_schema/wine.service';

@Component({
  selector: 'app-wine-add',
  templateUrl: './wine-add.component.html',
  styleUrls: ['./wine-add.component.css']
})
export class WineAddComponent implements OnInit {

  type: any;

  constructor(public winesService: WinesService) {
    this.type = "Red";
   }

  ngOnInit(): void {
    this.type = "Red";
  }

  onSubmitClicked(form: NgForm) {
    var invalidForm = false;
    if (form.invalid) {
      alert('Something went wrong. Form invalid');
      return;
    }

    if (form.value.picName == '' || form.value.picName == null) {
      form.value.picName = 'NONE.jpg';
    }

    this.winesService.addPost(form.value.name, form.value.type, form.value.rating, form.value.year, form.value.price,
       form.value.notes, form.value.variety, form.value.alcPercent, form.value.terroir, form.value.picName);
    form.resetForm();
  }

}
