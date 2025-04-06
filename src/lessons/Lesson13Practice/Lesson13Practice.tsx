import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";

import { Lesson13PracticeContainer, MessageWrapper, Error } from "./styles";
import Spinner from "../../components/Spinner/Spinner";

function Lesson13Practice() {
  const [message, setMessage] = useState<string | undefined>(undefined);
  const [errorText, setErrorText] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMessage = async () => {
    setErrorText(undefined);
    setIsLoading(true);

    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setMessage(response.data.message);
    } catch (error: any) {
      setErrorText(error.text);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <Lesson13PracticeContainer>
      <Button
        name="GET MORE IMAGES"
        onClick={getMessage}
        disabled={isLoading}
      />
      <MessageWrapper>{isLoading ? <Spinner /> : message}</MessageWrapper>
      <Error>{errorText}</Error>
      <img src={"https://dog.ceo/api/breeds/image/random"} />
    </Lesson13PracticeContainer>
  );
}

export default Lesson13Practice;
