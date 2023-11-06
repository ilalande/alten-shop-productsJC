import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-table-toolbar',
  templateUrl: './table-toolbar.component.html',
  styleUrls: ['./table-toolbar.component.scss'],
})
export class TableToolbarComponent<T> {
  @Input() public selectable: boolean;
  @Input() public selectedEntries: (T & { id: string })[] = [];
  @Input() public allowImport: boolean;
  @Input() public allowExport: boolean;

  @Output() public readonly deleteMultipleClicked: EventEmitter<void> =
    new EventEmitter();
  @Output() public readonly manageColumnsClicked: EventEmitter<void> =
    new EventEmitter();
  @Output() public readonly newClicked: EventEmitter<void> = new EventEmitter();
  @Output() public readonly exportClicked: EventEmitter<void> =
    new EventEmitter();

  constructor() {}

  public onDeleteMultiple(): void {
    this.deleteMultipleClicked.emit();
  }

  public manageColumns(): void {
    this.manageColumnsClicked.emit();
  }

  public onNew(): void {
    this.newClicked.emit();
  }

  public export(): void {
    this.exportClicked.emit();
  }
}
