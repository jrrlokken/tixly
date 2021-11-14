import { Publisher, Subjects, TicketUpdatedEvent } from "@tixly/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
