import { Link, LinkProps } from "expo-router";
import { ReactNode } from "react";
import { Pressable, Text, PressableProps } from "react-native";

type ButtonProps = PressableProps & LinkProps<string> & {
  children: ReactNode;
  href: string;
}

type ButtonTextProps = {
  children: ReactNode;
};

type ButtonIconProps = {
  children: ReactNode;
};

function Button({ children, href, ...rest }: ButtonProps) {
  return (
    <Link href={href} asChild>
      <Pressable
        className="h-12 w-80 ml-7 mb-4 bg-blue-600 rounded-md flex-row justify-center items-center"
        {...rest}
      >
        {children}
      </Pressable>
    </Link>
  );
}

function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text className="text-white font-heading text-base mx-2">{children}</Text>
  );
}

function ButtonIcon({ children }: ButtonIconProps) {
  return children;
}

Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export { Button };
