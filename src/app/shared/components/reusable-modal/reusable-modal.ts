import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalAction, ModalConfig } from '@core/interceptors/modal.model';
import { SHARED_IMPORTS } from '@shared/common/shared.imports';

@Component({
  selector: 'app-reusable-modal',
  imports: [SHARED_IMPORTS],
  templateUrl: './reusable-modal.html',
  styleUrl: './reusable-modal.scss',
})
export class ReusableModal implements OnInit {

@Input() config!: ModalConfig;
  @Output() action = new EventEmitter<ModalAction>();

  close() {
    this.action.emit(ModalAction.CANCEL);
  }

  onAction(type: ModalAction) {
    this.action.emit(type);
  }

  ngOnInit(): void {
    
  }

}