import { CrudItemOptions } from 'app/shared/utils/crud-item-options/crud-item-options.model';
import { ControlType } from 'app/shared/utils/crud-item-options/control-type.model';
import { ScreenWidth } from 'app/shared/utils/crud-item-options/screen-width.model';

export const productTableConfig: CrudItemOptions[] = [
  {
    key: 'id',
    controlType: ControlType.INPUT,
    label: 'ID',
    columnOptions: {
      minScreenSize: ScreenWidth.large,
      hidden: true,
    },
  },
  {
    key: 'code',
    label: 'code',
    controlType: ControlType.INPUT,
    type: 'text',
    columnOptions: {
      sortable: true,
      filterable: true,
      minScreenSize: ScreenWidth.medium,
      default: true,
    },
  },
  {
    key: 'name',
    label: 'name',
    controlType: ControlType.INPUT,
    type: 'text',
    columnOptions: {
      sortable: true,
      filterable: true,
      minScreenSize: ScreenWidth.medium,
      default: true,
    },
  },
  {
    key: 'price',
    label: 'price',
    controlType: ControlType.INPUT,
    type: 'number',
    columnOptions: {
      sortable: true,
      filterable: true,
      minScreenSize: ScreenWidth.medium,
      default: false,
    },
  },
  {
    key: 'category',
    label: 'category',
    // See dynamic-form-control.component.html to determine options to configure and crud-item-options.model.ts
    controlType: ControlType.SELECT,
    options: [
      { value: 'Accessories', label: 'Accessories' },
      { value: 'Clothing', label: 'Clothing' },
      { value: 'Fitness', label: 'Fitness' },
      { value: 'Electronics', label: 'Electronics' },
    ],
    columnOptions: {
      sortable: true,
      filterable: false,
      minScreenSize: ScreenWidth.medium,
      default: false,
    },
  },
  {
    key: 'quantity',
    label: 'quantity',
    controlType: ControlType.INPUT,
    type: 'text',
    columnOptions: {
      sortable: true,
      filterable: true,
      minScreenSize: ScreenWidth.medium,
      default: true,
    },
  },
  {
    key: 'inventoryStatus',
    label: 'inventory status',
    controlType: ControlType.SELECT,
    options: [
      { value: 'INSTOCK', label: 'INSTOCK' },
      { value: 'LOWSTOCK', label: 'LOWSTOCK' },
      { value: 'OUTOFSTOCK', label: 'OUTOFSTOCK' },
    ],
    columnOptions: {
      sortable: true,
      filterable: false,
      minScreenSize: ScreenWidth.medium,
      default: false,
    },
  },
  {
    key: 'rating',
    label: 'rating',
    controlType: ControlType.SELECT,
    options: [
      { value: 1, label: '★' },
      { value: 2, label: '★★' },
      { value: 3, label: '★★★' },
      { value: 4, label: '★★★★' },
    ],
    columnOptions: {
      sortable: true,
      filterable: false,
      minScreenSize: ScreenWidth.medium,
      default: false,
    },
  },
];
