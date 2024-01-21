/** Method to return colum header, column key, along with the corresponding column type for binding.
 * @param appMessages en.json constant
 * @retruns Configuration for the table[{key:string, type:string, title: string}]
 */
export function userListDisplayedColumns(appMessages: any) {
  const columnSchema = [
    {
      key: 'email',
      title: appMessages.dataGrid.email,
      type: 'text',
    },
    {
      key: 'userName',
      title: appMessages.dataGrid.username,
      type: 'textBold',
    },
    {
      key: 'name',
      title: appMessages.dataGrid.name,
      type: 'text',
    },
    {
      key: 'password',
      title: appMessages.dataGrid.password,
      type: 'text',
    },
  ];

  return columnSchema;
}
