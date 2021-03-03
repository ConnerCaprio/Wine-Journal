import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WinesService } from './../wine_schema/wine.service';

@Component({
  selector: 'app-wine-add',
  templateUrl: './wine-add.component.html',
  styleUrls: ['./wine-add.component.css']
})
export class WineAddComponent implements OnInit {

  constructor(public winesService: WinesService) { }

  ngOnInit(): void {
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

    alert('Submitted');

    this.winesService.addPost(form.value.name, form.value.type2, form.value.rating, form.value.year, form.value.price,
       form.value.notes, form.value.variety, form.value.alcPercent, form.value.terroir, form.value.picName);
    form.resetForm();
  }

}
