import { Link } from "react-router-native";
import { theme } from "../../styles";

type Props = {
  to: string;
  children: React.ReactNode;
  underlayColor?: string;
};

export const StyledLink: React.FC<Props> = ({
  to,
  children,
  underlayColor,
}) => {
  return (
    <Link to={to} underlayColor={`${underlayColor ?? theme.colors.primary}80`}>
      {children}
    </Link>
  );
};
