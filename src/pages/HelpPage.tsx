
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LifeBuoy, Mail, Phone } from "lucide-react";

const HelpPage = () => {
  return (
    <MainLayout>
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-6">Help & Support</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <LifeBuoy className="h-5 w-5 text-primary" />
                Knowledge Base
              </CardTitle>
              <CardDescription>Find answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full" onClick={() => window.location.href = "/knowledge"}>
                Browse Articles
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Email Support
              </CardTitle>
              <CardDescription>Get help via email</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full" onClick={() => window.location.href = "mailto:support@unobravo.com"}>
                Contact Support
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Phone Support
              </CardTitle>
              <CardDescription>Talk to a support agent</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full" onClick={() => window.location.href = "tel:+390123456789"}>
                Call Support
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search for help</CardTitle>
            <CardDescription>Search our knowledge base for answers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input placeholder="Search for help..." className="flex-1" />
              <Button>Search</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Common questions and answers</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                <AccordionContent>
                  You can reset your password by clicking on the "Forgot Password" link on the login page, or by contacting support directly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I create a new ticket?</AccordionTrigger>
                <AccordionContent>
                  Navigate to the Support Tickets section from the main menu, then click on the "Create New Ticket" button. Fill in the required information and submit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What are badges and how do I earn them?</AccordionTrigger>
                <AccordionContent>
                  Badges are recognition for your achievements in the platform. You can earn them by completing specific tasks, helping other users, and participating actively in the community.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How do I schedule a call?</AccordionTrigger>
                <AccordionContent>
                  Go to the Call Room section, click on "Schedule a Call", select your preferred date and time, and confirm the appointment.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>How can I access the knowledge base?</AccordionTrigger>
                <AccordionContent>
                  The Knowledge Base can be accessed from the main navigation menu. It contains articles, guides, and resources to help you use the platform effectively.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default HelpPage;
