import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css']
})
export class AgGridComponent implements OnInit {

  columnDefs: any[] = [];
  rowData: any[] = [];

  @Input() rowDataInput: any;
  @Input() columnDefsInput: any;
  @Output() deletePerson = new EventEmitter<string>();
  @Output() updatePersondata = new EventEmitter<string>();

  private gridApi: any;

  constructor() { }

  ngOnInit(): void {
    this.rowData = this.rowDataInput;
    this.columnDefs = this.columnDefsInput;
  }

  ngOnChanges(): void {
    this.rowData = this.rowDataInput;
    this.columnDefs = this.columnDefsInput;
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  getSelectedRowData() {
    let selectedData = this.gridApi.getSelectedRows();
    selectedData.forEach((element: any) => {
      this.deletePerson.emit(element['PERSON_ID']);
    });
    return selectedData;
  }

  onCellValueChanged(event: any) {
    this.updatePersondata.emit(event);
  }

}
