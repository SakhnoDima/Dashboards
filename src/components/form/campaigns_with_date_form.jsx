import { useState } from "react";
import PropTypes from "prop-types";
import { StyledForm } from "./styles_forma";
import { widget_creator } from "../../services";

export const WidgetCreator = ({ setWidget, loading, setLoading }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.trim()) {
      try {
        setLoading(true);
        const res = await widget_creator(message);
        console.log(res);
        setWidget(JSON.parse(res));
      } catch (error) {
        console.log(error);
      } finally {
        setMessage("");
        setLoading(false);
      }
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="message"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button disabled={loading} type="submit">
        {loading ? "Submitting..." : "Submit"}
      </button>
    </StyledForm>
  );
};

WidgetCreator.propTypes = {
  setWidget: PropTypes.func.isRequired,
};
