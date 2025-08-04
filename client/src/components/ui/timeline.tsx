import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItemProps {
  children: ReactNode;
  className?: string;
}

interface TimelineProps {
  children: ReactNode;
  className?: string;
}

export function Timeline({ children, className = "" }: TimelineProps) {
  return (
    <div className={`timeline ${className}`}>
      {children}
    </div>
  );
}

export function TimelineItem({ children, className = "" }: TimelineItemProps) {
  return (
    <div className={`timeline-item ${className}`}>
      <Card className="timeline-content">
        <CardContent className="p-6">
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
