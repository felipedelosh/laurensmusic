/***
 * Save Files in HardDrive :)
 */

localStorage.setItem('autor', 'felipdelosh');

//If never enter the page show HOME view
if(localStorage.getItem('current_view') === null){
    localStorage.setItem('current_view', "HOME");
}
