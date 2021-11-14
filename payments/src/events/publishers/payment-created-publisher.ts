import { Publisher, PaymentCreatedEvent, Subjects } from "@tixly/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
