import React, { useContext } from "react";
import styled from "@emotion/styled";
import { useInView } from "react-intersection-observer";
import { TitleTextContext } from "../../App";
import { useForm, Controller } from "react-hook-form";
import { TextField } from "@material-ui/core";

export const Contact = () => {
  const { setTitle } = useContext(TitleTextContext);

  const { ref, inView } = useInView({
    // オプション
    threshold: [0.5, 1.0],
  });

  const {
    formState: { errors },
    control,
    handleSubmit,
    register,
  } = useForm();
  const on_submit = (data) => console.log(data);

  return (
    <SContainer>
      <SContact ref={ref}>
        {inView && setTitle("Contact")}
        <SContactSnsBox></SContactSnsBox>
        <SContactFormBox>
          <form onSubmit={handleSubmit(on_submit)}>
            <Controller
              control={control}
              {...register("name", { required: true })}
              render={({ field }) => (
                <STextField id="standard-basic" label="Name" {...field} />
              )}
            />
            {errors.name && <p>Your input is required</p>}
            <Controller
              control={control}
              {...register("email", { required: true })}
              render={({ field }) => (
                <STextField id="standard-basic" label="Email" {...field} />
              )}
            />
            {errors.email && <p>Your input is required</p>}
            <button type="submit">Submit</button>
          </form>
        </SContactFormBox>
      </SContact>
    </SContainer>
  );
};

const SContainer = styled.div`
  /* width: 100%;
  height: 1800px; */
  width: calc(100% - 80px);
  height: calc(95vh - 90px);
  /* background-color: red; */
  background-color: whitesmoke;
  margin: 0 auto;
  position: relative;
  margin-bottom: 20vh;
`;

const SContact = styled.div`
  /* width: calc(100% - 80px); */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  /* flex-wrap: wrap; */
  /* background-color: whitesmoke; */
  /* align-items: center; */
`;

const SContactSnsBox = styled.div`
  width: 50%;
`;

const SContactFormBox = styled.div`
  width: 50%;
`;

const STextField = styled(TextField)`
  color: black;
`;
