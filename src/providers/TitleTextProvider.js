// import { createContext, useState } from "react";

// export const TitleTextContext = createContext();

// export const TitleTextProvider = (props) => {
//   const { children } = props;
//   const [title, setTitle] = useState("Welcome");

//   return (
//     <TitleTextContext.Provider value={{ title, setTitle }}>
//       {children}
//     </TitleTextContext.Provider>
//   );
// };

//   export const LoginUserContext = createContext({} as LoginUserContextType);

//   export const LoginUserProvider = (props: { children: ReactNode }) => {
//     const { children } = props;
//     const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
//     return (
//       <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
//         {children}
//       </LoginUserContext.Provider>
//     );
//   };
