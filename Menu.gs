/**
 * Спеціальна функція, яка автоматично запускається
 * щоразу при відкритті таблиці користувачем.
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  
  ui.createMenu('СКРІПТИ КОРИСТУВАЧІВ')
    // Перший пункт меню: назва пункту, назва функції скрипту
    .addItem('Запустити Віктора по збору втрат', 'populateLossesData')
    .addItem('Запустити скрипт збору даних', 'updateWorkingTable')
    
    // Розділювальна лінія (за потреби)
    .addSeparator()
    
    .addItem('Запустити скрипт по фпв', 'pullLossesDataFPV')
    .addItem('Запустити скрипт по немезіс', 'pullLossesDataNEM')
    // Додавайте інші пункти за зразком:
    // .addItem('Назва кнопки', 'ім_я_функції')
    
    .addToUi();
}
