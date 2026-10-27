import "../styles/card.css";
import { CircleUserRound, Clock, MessageCircle, MessageSquare, Paperclip } from "lucide-react";

const Card = () => {
  return (
    <div className="card">
      <p className="desc">Client: Datalar</p>
      <h3>Change bottom CTA text</h3>
      <div className="profile">
        <div className="user">
          <CircleUserRound />
          <p>Sohan kumar</p>
        </div>

        <div className="tags">
          <p>Web</p>
          <p>SaaS</p>
        </div>
      </div>
      <div className="footer">
        <div>
          <span>
            <Paperclip />4
          </span>
          <span>
            <MessageCircle /> 50
          </span>
          <span>
            <MessageSquare /> 6
          </span>
        </div>
        <div>
          <span>
            <Clock />
            6h
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
