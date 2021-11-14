import { Publisher, Subjects, TicketCreatedEvent } from "@tixly/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
