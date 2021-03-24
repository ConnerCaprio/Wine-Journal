import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { WinesService } from './../wine_schema/wine.service';

@Component({
  selector: 'app-wine-add',
  templateUrl: './wine-add.component.html',
  styleUrls: ['./wine-add.component.css']
})
export class WineAddComponent implements OnInit {

  @Input()
  public addWine = false;

  @Input()
  public redVarieties: string[] = [];

  @Input()
  public whiteVarieties: string[] = [];

  @Input()
  public sparklingVarieties: string[] = [];

  public addWineForm = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl('Red', Validators.required),
    rating: new FormControl('', Validators.required),
    year: new FormControl(''),
    price: new FormControl(''),
    notes: new FormControl(''),
    variety: new FormControl(''),
    alcPercent: new FormControl(''),
    terroir: new FormControl(''),
    picName: new FormControl(''),
    image: new FormControl(null)
  });

  public selectedPicName: string = '';

  public varieties: string[] = [];

  constructor(public winesService: WinesService) {
   }

  ngOnInit(): void {
    this.varieties = this.redVarieties;
    this.addWineForm.get('type')?.valueChanges.subscribe(val => {
      if (val === 'Red') {
        this.varieties = this.redVarieties;
      } else if (val === 'White') {
        this.varieties = this.whiteVarieties;
      } else {
        this.varieties = this.sparklingVarieties;
      }
    })
  }

  onSubmitClicked(form: FormGroup) {
    var invalidForm = false;
    if (form.invalid) {
      alert('Something went wrong. Form invalid');
      return;
    }

    var imageNameWithoutExtension;

    if (form.value.image == '' || form.value.image == null) {
      imageNameWithoutExtension = 'NONE.jpg';
    }
    else {
      imageNameWithoutExtension = form.value.image.name.split('.');
    imageNameWithoutExtension = imageNameWithoutExtension[0].toLowerCase().split(' ').join('-');
    }

     

    this.winesService.addPost(form.value.name, form.value.type, form.value.rating, form.value.year, form.value.price,
       form.value.notes, form.value.variety, form.value.alcPercent, form.value.terroir, imageNameWithoutExtension, form.value.image);
    form.reset();
    this.addWine = false;
  }

  onImagePicked(event: Event) {
    var fileCheck = (event.target as HTMLInputElement).files;
    if (fileCheck === null) {
      alert('image was null');
      this.selectedPicName = '';
      return;
    }
    const file = fileCheck[0];
    this.selectedPicName = file.name;

    this.addWineForm.patchValue({image: file});
    this.addWineForm.get('image')?.updateValueAndValidity();
    console.log(file);
    console.log(this.addWineForm);
  }

}
