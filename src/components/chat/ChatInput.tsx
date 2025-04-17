
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { PaperclipIcon, SendHorizontal, Smile } from "lucide-react";
import { KeyboardEvent, useState } from "react";

interface ChatInputProps {
  onSubmit: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function ChatInput({ onSubmit, placeholder = "Type your message...", disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (message.trim() && !disabled) {
      onSubmit(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border bg-card rounded-lg p-3">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className="resize-none min-h-[60px] border-0 focus-visible:ring-0 p-0 shadow-none"
      />
      <div className="flex justify-between mt-2">
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" type="button" disabled={disabled}>
            <PaperclipIcon className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" type="button" disabled={disabled}>
            <Smile className="h-4 w-4" />
          </Button>
        </div>
        <Button 
          onClick={handleSubmit} 
          size="sm" 
          disabled={!message.trim() || disabled}
          className="gap-1"
        >
          Send <SendHorizontal className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
