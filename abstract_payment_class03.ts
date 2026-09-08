import { Payments } from "./interface_payments_class03";

abstract class paymentMethod implements Payments {

    payment(amount: number): void {

    }



}

export class UPI extends paymentMethod {

    payment(amount: number): void {

        console.log("Payment received through UPI  : " + amount);
    }


}

export class creditCard extends paymentMethod {

    payment(amount: number): void {

        console.log("Payment received through creditcard : " + amount);
    }


}

export class NetBanking extends paymentMethod {

    payment(amount: number): void {

        console.log("Payment received through netbanking : " + amount);
    }

}