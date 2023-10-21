import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  const categoryIcons = {
    keyboards: <KeyboardIcon size={16} />,
    monitors: <MonitorIcon size={16} />,
    headphones: <HeadphonesIcon size={16} />,
    mousepads: <SquareIcon size={16} />,
    speakers: <SpeakerIcon size={16} />,
    mouses: <MouseIcon size={16} />,
  };

  return (
    <Badge
      variant="outline"
      className="flex items-center justify-center gap-2 rounded-lg py-2"
    >
      {categoryIcons[category.slug as keyof typeof CategoryItem]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  );
};