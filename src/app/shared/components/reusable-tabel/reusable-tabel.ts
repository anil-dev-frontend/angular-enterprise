import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableColumn } from '@core/interceptors/tabel';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';

@Component({
  selector: 'app-reusable-tabel',
  imports: [SHARED_IMPORTS],
  templateUrl: './reusable-tabel.html',
  styleUrl: './reusable-tabel.scss',
})
export class ReusableTabel implements OnInit {

  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];

  @Input() clickable: boolean = false;

  // edit/delete only when needed
  @Input() actions: boolean = false;

  @Output() rowClick = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();

  // Pagination
  @Input() pageSize: number = 5;
  currentPage = 1;

  
  ngOnInit(): void {}

  onRowClick(row: any) {
    if (this.clickable) this.rowClick.emit(row);
  }


  get paginatedData() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.data.slice(start, start + this.pageSize);
  }

  totalPages() {
    return Math.ceil(this.data.length / this.pageSize);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
    }
  }

}
