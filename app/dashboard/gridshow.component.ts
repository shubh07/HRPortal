import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Router } from '@angular/router';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';
import ProficiencyFilter from '../proficiencyFilter';
import SkillFilter from '../skillFilter';
import RefData from '../refData';

import {AuthenticationService} from '../services/authentication.service'

@Component({
  selector: 'home',
    providers: [AuthenticationService],
  directives: [ CORE_DIRECTIVES,AgGridNg2],
 templateUrl: './app/dashboard/gridshow.html',
 styles: ['.toolbar button {margin: 2px; padding: 0px;}'],
})
export class GridShow {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;
  private gridOptions: GridOptions;
  private showGrid: boolean;
  private rowData: any[];
  private columnDefs: any[];
  private rowCount: string;

  constructor(public router: Router, private _service:AuthenticationService) {
        this.gridOptions = <GridOptions>{};
        this.createRowData();
        this.createColumnDefs();
        this.showGrid = true;
  }

  ngOnInit(){
       if(!this._service.isUserLoggedIn())
       {           
          this.router.navigate(['/login']);
       }
  }
 
    logout() {
        this._service.logout();
        this.router.navigate(['/login']);
    }
    
    private createRowData() {
        var rowData: any[] = [];

        for (var i = 0; i < 200; i++) {
            var countryData = RefData.countries[i % RefData.countries.length];
           var designation = 'Software Engineer';
            rowData.push({
                name: RefData.dataForGrid[i].Name,//RefData.firstNames[i % RefData.firstNames.length] + ' ' + RefData.lastNames[i % RefData.lastNames.length],
                skills: {
                    android: Math.random() < 0.4,
                    html5: Math.random() < 0.4,
                    mac: Math.random() < 0.4,
                    windows: Math.random() < 0.4,
                    css: Math.random() < 0.4
                },
                designation:designation,
                permanentaddress: RefData.dataForGrid[i].PermanentAddress,//RefData.addresses[i % RefData.addresses.length],
                currentaddress: RefData.dataForGrid[i].currentaddress,
                emergencyContact1: RefData.dataForGrid[i].EmergencyContact1,
                Relation1: RefData.dataForGrid[i].Relation1,
                ECAddress1: RefData.dataForGrid[i].ECAddress1,
                ECPhone1: RefData.dataForGrid[i].ECPhone1,
                EmergencyContact2: RefData.dataForGrid[i].EmergencyContact2,
                Relation2: RefData.dataForGrid[i].Relation2,
                ECAddress2: RefData.dataForGrid[i].ECAddress2,
                ECPhone2: RefData.dataForGrid[i].ECPhone2,
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100),
                country: countryData.country,
                continent: countryData.continent,
                language: RefData.dataForGrid[i].Skype,//countryData.language,
                mobile: RefData.dataForGrid[i].PhoneNumber,//createRandomPhoneNumber(),
                landline: RefData.dataForGrid[i].LandlineNumber
            });
        }

        this.rowData = rowData;
    }

    private createColumnDefs() {
        this.columnDefs = [
            {headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true,
                suppressMenu: true, pinned: true},
            {
                headerName: 'Employee',
                children: [
                    {headerName: "Name", field: "name",
                        width: 150, pinned: true},
                        {headerName: "Designation", field: "designation",
                        width: 150, pinned: true}, 
                   /* {headerName: "Country", field: "country", width: 150,
                        cellRenderer: countryCellRenderer, pinned: true,
                        filterParams: {cellRenderer: countryCellRenderer, cellHeight: 20}},*/
                ]
            },
           /* {
                headerName: 'IT Skills',
                children: [
                    {headerName: "Skills", width: 125, suppressSorting: true, cellRenderer: skillsCellRenderer, filter: SkillFilter},
                    {headerName: "Proficiency", field: "proficiency", width: 120, cellRenderer: percentCellRenderer, filter: ProficiencyFilter},
                ]
            },*/
            {
                headerName: 'Contact Information',
                children: [
                    {headerName: "Mobile", field: "mobile", width: 100, filter: 'text'},
                    {headerName: "Land-line (if applicable)", field: "landline", width: 100, filter: 'text'},
                    {headerName: "Permanent Address", field: "permanentaddress", width: 200, filter: 'text'},
                    {headerName: "Current Address", field: "currentaddress", width: 150, filter: 'text'},
                    {headerName: "Emergency Contact 1", field: "emergencyContact1", width: 100, filter: 'text'},
                    {headerName: "Relation1", field: "Relation1", width: 100, filter: 'text'},
                {headerName: "ECAddress1", field: "ECAddress1", width: 150, filter: 'text'},
                {headerName: "ECPhone1", field: "ECPhone1", width: 100, filter: 'text'},
                {headerName: "Emergency Contact 2", field: "EmergencyContact2", width: 100, filter: 'text'},
                {headerName: "Relation2", field: "Relation2", width: 100, filter: 'text'},
                {headerName: "ECAddress2", field: "ECAddress2", width: 150, filter: 'text'},
                {headerName: "ECPhone2", field: "ECPhone2", width: 100, filter: 'text'},
                ]
            }
        ];
    }

    private calculateRowCount() {
        if (this.gridOptions.api && this.rowData) {
            var model = this.gridOptions.api.getModel();
            var totalRows = this.rowData.length;
            var processedRows = model.getRowCount();
            this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
        }
    }

    private onModelUpdated() {
        console.log('onModelUpdated');
        this.calculateRowCount();
    }

    private onReady() {
        console.log('onReady');
        this.calculateRowCount();
    }

    private onCellClicked($event) {
        console.log('onCellClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellValueChanged($event) {
        console.log('onCellValueChanged: ' + $event.oldValue + ' to ' + $event.newValue);
    }

    private onCellDoubleClicked($event) {
        console.log('onCellDoubleClicked: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellContextMenu($event) {
        console.log('onCellContextMenu: ' + $event.rowIndex + ' ' + $event.colDef.field);
    }

    private onCellFocused($event) {
        console.log('onCellFocused: (' + $event.rowIndex + ',' + $event.colIndex + ')');
    }

    private onRowSelected($event) {
        // taking out, as when we 'select all', it prints to much to the console!!
        // console.log('onRowSelected: ' + $event.node.data.name);
    }

    private onSelectionChanged() {
        console.log('selectionChanged');
    }

    private onBeforeFilterChanged() {
        console.log('beforeFilterChanged');
    }

    private onAfterFilterChanged() {
        console.log('afterFilterChanged');
    }

    private onFilterModified() {
        console.log('onFilterModified');
    }

    private onBeforeSortChanged() {
        console.log('onBeforeSortChanged');
    }

    private onAfterSortChanged() {
        console.log('onAfterSortChanged');
    }

    private onVirtualRowRemoved($event) {
        // because this event gets fired LOTS of times, we don't print it to the
        // console. if you want to see it, just uncomment out this line
        // console.log('onVirtualRowRemoved: ' + $event.rowIndex);
    }

    private onRowClicked($event) {
        console.log('onRowClicked: ' + $event.node.data.name);
    }

    private onQuickFilterChanged($event) {
        this.gridOptions.api.setQuickFilter($event.target.value);
    }

    // here we use one generic event to handle all the column type events.
    // the method just prints the event name
    private onColumnEvent($event) {
        console.log('onColumnEvent: ' + $event);
    }

}

function skillsCellRenderer(params) {
    var data = params.data;
    var skills = [];
    RefData.IT_SKILLS.forEach(function (skill) {
        if (data && data.skills && data.skills[skill]) {
            skills.push('<img src="/images/skills/' + skill + '.png" width="16px" title="' + skill + '" />');
        }
    });
    return skills.join(' ');
}

function countryCellRenderer(params) {
    var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='../images/flags/" + RefData.COUNTRY_CODES[params.value] + ".png'>";
    return flag + " " + params.value;
}

function createRandomPhoneNumber() {
    var result = '+';
    for (var i = 0; i < 12; i++) {
        result += Math.round(Math.random() * 10);
        if (i === 2 || i === 5 || i === 8) {
            result += ' ';
        }
    }
    return result;
}

function percentCellRenderer(params) {
    var value = params.value;

    var eDivPercentBar = document.createElement('div');
    eDivPercentBar.className = 'div-percent-bar';
    eDivPercentBar.style.width = value + '%';
    if (value < 20) {
        eDivPercentBar.style.backgroundColor = 'red';
    } else if (value < 60) {
        eDivPercentBar.style.backgroundColor = '#ff9900';
    } else {
        eDivPercentBar.style.backgroundColor = '#00A000';
    }

    var eValue = document.createElement('div');
    eValue.className = 'div-percent-value';
    eValue.innerHTML = value + '%';

    var eOuterDiv = document.createElement('div');
    eOuterDiv.className = 'div-outer-div';
    eOuterDiv.appendChild(eValue);
    eOuterDiv.appendChild(eDivPercentBar);

    return eOuterDiv;
}

