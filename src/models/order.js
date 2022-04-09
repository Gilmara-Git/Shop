import moment  from 'moment/src/moment';
class Order {
   constructor(id, items, totalAmount, date){
       this.id = id;
       this.items = items;
       this.totalAmount = totalAmount;
       this.date = date;
   } 
   get readableDate(){
       // We are not the toLocalDateString because it only gives full date details in 'ios'
    //    return this.date.toLocaleDateString('en-EN', {
    //        year: 'numeric',
    //        month: 'long',
    //        day: 'numeric',
    //        hour: '2-digit',
    //        minute: '2-digit'
    //    });

    return moment(this.date).format('MMMM Do YYYY, hh:mm A');
   }
}

export default Order;