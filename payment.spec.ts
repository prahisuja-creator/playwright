import test from "@playwright/test"
import { creditCard, NetBanking, UPI } from "./abstract_payment_class03"

test('payment method',async()=>{
    const UPIObj = new UPI
    const CreditObj = new creditCard
    const netbankingObj = new NetBanking

    UPIObj.payment(1000)
    CreditObj.payment(2000)
    netbankingObj.payment(3000)
})