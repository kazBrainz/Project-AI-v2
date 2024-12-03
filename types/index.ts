export interface LayoutProps {
  children: React.ReactNode;
}

export interface HeroProps {
  backgroundImage: string;
  title: string;
  desc: string;
}

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface EventModalProps extends ModalProps {
  type: "cancel" | "success";
}

export interface BaseAboutProps {
  title: string;
  paragraphB: string;
}

export interface AboutProps extends BaseAboutProps {
  type: "About";
  paragraphA: string;
}

export interface MissionProps extends BaseAboutProps {
  type: "Mission";
  list: string[];
}

export interface TeamProps extends BaseAboutProps {
  type: "Team";
  images: { imageSrc: string; teamName: string; teamRole: string; }[];
}

export type AboutUsProps = AboutProps | MissionProps | TeamProps;
