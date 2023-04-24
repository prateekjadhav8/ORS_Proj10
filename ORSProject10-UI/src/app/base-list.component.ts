import { OnInit, Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ServiceLocatorService } from './service-locator.service';
import { HttpServiceService } from './http-service.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from './base.component';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

export class BaseListCtl extends BaseCtl {  
  
  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;
  deleteRecordList: any = [];
  isMasterSel:boolean = false ;

  public kl : number;
  constructor(public endpoint, public locator: ServiceLocatorService, public route: ActivatedRoute) {
    super(endpoint, locator, route);    
  }

  /**
   * Initialize component
   */
  ngOnInit() {   
    this.preload();
    this.search();
    this.isMasterSel = false ;
      }

  display() {
    this.search();
  }

  submit() {
    this.search();
  }

  delete(id) {
    super.delete(id, function () {
      this.search();
    });
  }


  next() {
    this.form.pageNo++;
     this.display(); 
   
   
  //  this.isMasterSel = false ;  
  //  this.searchOperation('previous');
  }


  previous() {
    if (this.form.pageNo > 0) {
      this.form.pageNo--
    //  this.display(); 
    this.isMasterSel = false ;
    this.searchOperation('previous');    
    }
  }

  

  checkUncheckAll(event) {
    const checked = event.target.checked;
    this.checkboxes.forEach((element) => {     
        element.nativeElement.checked = checked     
    });   
  }

  
//   deleteMany(){
//   console.log('delete Many Records starts ');
//   console.log('this.form.pageNo ' +this.form.pageNo);  
//   var msg : String =''
//   this.deleteRecordList.length=0;
//   console.log('record deleting start ')
//   var isRecordSelected:boolean = false ;
 
//     this.checkboxes.forEach((element) => {
//       if (element.nativeElement.checked) {
//         // console.log('record deleting ' + element.nativeElement.id)
//         this.deleteRecordList.push(element.nativeElement.id);
//         isRecordSelected = true ;
//       }
//     });     
  
//     if(isRecordSelected){
//       console.log('record(s) for delete ' + this.deleteRecordList)        
//       this.serviceLocator.httpService.get(this.api.deleteMany + "/" + this.deleteRecordList + '?pageNo=' +this.form.pageNo, function (res) {
//         if (res.success) {
//             console.log('Inside response success ')
//           //  this.deleteMany();
//          //  this.form.message = "Data is deleted";
//        //  msg ="Data is deleted";
//         //  this.form.message = res.result.message;
       
//           console.log('deleteMany Calling Callback'); 
//           this.search();  
//     } else {
//       this.form.error = true;
//       this.form.message = res.result.message;
//     }
//   });
//   this.form.message = "Data is deleted" ;
//   console.log('this.form.pageNo ' +this.form.pageNo);  
  
//     }else{
//       this.form.message = "Select Atleast One Record";
//         this.form.error = true;
//     console.log('No record(s) for delete ')
//   }
//   console.log('delete Many Records ends ');
// }



deleteMany(){
  console.log('delete Many Records starts ');
  console.log('this.form.pageNo ' +this.form.pageNo);  
  this.form.error = false;
  this.deleteRecordList.length=0;
  console.log('record deleting start ')
  var isRecordSelected:boolean = false ;
 
    this.checkboxes.forEach((element) => {
      if (element.nativeElement.checked) {
        // console.log('record deleting ' + element.nativeElement.id)
        this.deleteRecordList.push(element.nativeElement.id);
        isRecordSelected = true ;
      }
    });     
  
    if(isRecordSelected){
      console.log('record(s) for delete ' + this.deleteRecordList) ;       
      super.deleteMany(this.deleteRecordList + '?pageNo=' +this.form.pageNo,function(){
      //  this.search();  
            
      });  
    }else{
      this.form.message = "Select Atleast One Record";
        this.form.error = true;
    console.log('No record(s) for delete ')
  }
  this.isMasterSel = false ;  
  console.log('delete Many Records ends ');
}

}
