import { CrudItemOptions } from 'app/shared/utils/crud-item-options/crud-item-options.model';
import { ControlType } from 'app/shared/utils/crud-item-options/control-type.model';
import { ScreenWidth } from 'app/shared/utils/crud-item-options/screen-width.model';

export const productTableConfig: CrudItemOptions[] = [
  {
    key: 'code',
    label: 'code',
    controlType: ControlType.INPUT,
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
    controlType: ControlType.LIST,
    columnOptions: {
      sortable: true,
      filterable: true,
      minScreenSize: ScreenWidth.medium,
      default: false,
    },
  },
  {
    key: 'inventoryStatus',
    label: 'inventory status',
    controlType: ControlType.LIST,
    columnOptions: {
      sortable: true,
      filterable: true,
      minScreenSize: ScreenWidth.medium,
      default: false,
    },
  },
];
