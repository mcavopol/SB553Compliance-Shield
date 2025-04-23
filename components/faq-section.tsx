"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Common questions about SB 553 compliance and workplace violence prevention requirements.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What is "workplace violence" under California Labor Code Section 6401.9?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Under California Labor Code Section 6401.9, "workplace violence" is defined as any act of violence or
                  threat of violence that occurs in a place of employment. This includes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    The threat or use of physical force against an employee that results in or has a high likelihood of
                    resulting in injury, psychological trauma, or stress
                  </li>
                  <li>An incident involving the threat or use of a firearm or other dangerous weapon</li>
                  <li>
                    Four specific types: Type 1 (criminal intent), Type 2 (customer/client), Type 3 (worker-on-worker),
                    and Type 4 (personal relationship)
                  </li>
                </ul>
                <p className="mt-2 text-sm text-muted-foreground">
                  Source: Cal/OSHA Workplace Violence Prevention Fact Sheet – Division of Occupational Safety & Health
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                Who must comply with SB 553, and what exemptions exist?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  SB 553 applies to all California employers regardless of size or industry, with very limited
                  exceptions:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    State or local government agencies already covered by the Cal/OSHA workplace violence prevention in
                    healthcare standard
                  </li>
                  <li>
                    Employers already covered by the healthcare workplace violence prevention standard (Title 8, Section
                    3342)
                  </li>
                  <li>Employers in telecommunications covered by Section 8CCR 8604(e)</li>
                </ul>
                <p className="mt-2">
                  All other employers with at least one employee in California must comply, including small businesses,
                  non-profits, and remote-work employers.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Source: Cal/OSHA "Workplace Violence Prevention Laws in General Industry" – Labor Code § 6401.9(b)
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">When does SB 553 become enforceable?</AccordionTrigger>
              <AccordionContent>
                <p>SB 553 becomes enforceable on July 1, 2024. By this date, all covered employers must have:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>A compliant Workplace Violence Prevention Plan (WVPP) established and implemented</li>
                  <li>Violent incident log procedures in place</li>
                  <li>Initial employee training scheduled or completed</li>
                  <li>Recordkeeping systems established</li>
                </ul>
                <p className="mt-2">
                  Cal/OSHA can begin conducting inspections and issuing citations for non-compliance starting July 1,
                  2024.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Source: Cal/OSHA General Industry Overview – SB 553 effective date July 1, 2024
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                What are the mandatory components of a Workplace Violence Prevention Plan (WVPP)?
              </AccordionTrigger>
              <AccordionContent>
                <p>A compliant WVPP must include these mandatory elements:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Names/job titles of persons responsible for implementing the plan</li>
                  <li>Effective procedures to obtain active employee involvement</li>
                  <li>Methods for coordinating implementation with other employers</li>
                  <li>Procedures to accept and respond to reports of workplace violence</li>
                  <li>Procedures to develop and provide training</li>
                  <li>Procedures to identify and evaluate workplace violence hazards</li>
                  <li>Procedures to correct workplace violence hazards</li>
                  <li>Procedures for post-incident response and investigation</li>
                  <li>Procedures to review the effectiveness of the WVPP</li>
                </ul>
                <p className="mt-2 text-sm text-muted-foreground">
                  Source: Cal/OSHA Workplace Violence Prevention Fact Sheet – Labor Code § 6401.9(c)(2)(A)–(M)
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Can I embed my WVPP into my existing Injury & Illness Prevention Program (IIPP)?
              </AccordionTrigger>
              <AccordionContent>
                <p>Yes, you can incorporate your WVPP into your existing IIPP, but with important caveats:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>The WVPP must be clearly identifiable as a distinct section within the IIPP</li>
                  <li>All required WVPP elements must be fully addressed</li>
                  <li>The WVPP section must be easily accessible to employees</li>
                  <li>Training records must specifically document WVPP training separate from general IIPP training</li>
                </ul>
                <p className="mt-2">
                  While integration is allowed, many employers find maintaining a standalone WVPP simplifies compliance
                  verification during Cal/OSHA inspections.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Source: Cal/OSHA Model Workplace Violence Prevention Plan – guidance on integration with IIPP
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">Is there a Cal/OSHA model WVPP I can use?</AccordionTrigger>
              <AccordionContent>
                <p>Yes, Cal/OSHA provides a Model Workplace Violence Prevention Plan that employers can adapt:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Available as a downloadable template from the Cal/OSHA website</li>
                  <li>Includes all required elements and sample language</li>
                  <li>Requires customization to your specific workplace and hazards</li>
                  <li>Includes guidance notes to help with implementation</li>
                </ul>
                <p className="mt-2">
                  While using the model plan provides a solid foundation, employers must still customize it to address
                  their specific workplace conditions, hazards, and procedures. Simply downloading the template without
                  customization will not satisfy compliance requirements.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Source: Cal/OSHA Model Workplace Violence Prevention Plan download page
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-left">
                Does each work location require its own WVPP, or can one plan cover multiple sites?
              </AccordionTrigger>
              <AccordionContent>
                <p>A single WVPP can cover multiple locations, but with important requirements:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>The plan must include location-specific hazard assessments for each worksite</li>
                  <li>Site-specific procedures must be documented for each location</li>
                  <li>
                    The plan must address unique risks at each location (e.g., different security measures, neighborhood
                    risks)
                  </li>
                  <li>Location-specific training elements must be included</li>
                  <li>Each location must maintain its own violent incident log</li>
                </ul>
                <p className="mt-2">
                  Most multi-location employers use a master WVPP template with location-specific appendices that
                  address the unique aspects of each worksite.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Source: Cal/OSHA "Workplace Violence Prevention Laws in General Industry" – site‑specific requirement
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-left">
                What must be included in the Violent Incident Log, and can I design my own?
              </AccordionTrigger>
              <AccordionContent>
                <p>Yes, you can design your own Violent Incident Log, but it must include these required elements:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Date, time, location, and department of the incident</li>
                  <li>A detailed description of the incident</li>
                  <li>Classification of who committed the violence (Type 1-4)</li>
                  <li>Full names and job titles of employees involved</li>
                  <li>Nature and extent of injuries</li>
                  <li>Names of witnesses</li>
                  <li>Actions taken to prevent similar incidents</li>
                  <li>Name and title of the person completing the log</li>
                </ul>
                <p className="mt-2">
                  The log must be maintained for a minimum of five years and be made available to Cal/OSHA upon request.
                  Personal identifying information must be protected in accordance with privacy laws.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Source: Cal/OSHA Workplace Violence Prevention Fact Sheet – recordkeeping requirements
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-left">How long must I retain incident logs?</AccordionTrigger>
              <AccordionContent>
                <p>Violent incident logs must be retained for a minimum of five (5) years. This includes:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>The original incident documentation</li>
                  <li>Investigation records</li>
                  <li>Corrective actions taken</li>
                  <li>Training records related to the incident</li>
                </ul>
                <p className="mt-2">
                  If an incident results in a fatality or serious injury, the retention period may be longer based on
                  other applicable regulations. Records must be maintained in a manner that protects employee
                  confidentiality while remaining accessible for Cal/OSHA review.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Source: Cal/OSHA Workplace Violence Prevention Fact Sheet – five‑year retention rule
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="text-left">
                Are animal attacks considered reportable "workplace violence"?
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  No, animal attacks are not considered "workplace violence" under SB 553. The law specifically defines
                  workplace violence as acts committed by humans. However:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    Animal attacks should still be recorded under your regular Injury and Illness Prevention Program
                    (IIPP)
                  </li>
                  <li>
                    If an employee intentionally uses an animal to threaten or harm another employee, that would
                    constitute workplace violence
                  </li>
                  <li>
                    Employers whose employees work with animals should address animal-related hazards in their IIPP
                  </li>
                </ul>
                <p className="mt-2">
                  While not covered under the WVPP requirements, animal-related injuries must still be recorded on your
                  Cal/OSHA 300 log if they meet the general recordkeeping criteria.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Source: Cal/OSHA Workplace Violence Prevention Fact Sheet – definitions section
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger className="text-left">
                Do I need an anonymous reporting system for incidents?
              </AccordionTrigger>
              <AccordionContent>
                <p>Yes, SB 553 requires employers to establish procedures that ensure:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Employees can report workplace violence concerns anonymously</li>
                  <li>Reports can be made without fear of reprisal</li>
                  <li>A clear process exists for employees to report incidents or concerns</li>
                  <li>All reports are taken seriously and investigated promptly</li>
                </ul>
                <p className="mt-2">
                  Employers must implement at least one method for anonymous reporting, such as a suggestion box,
                  hotline, online form, or third-party reporting service. The reporting procedure must be clearly
                  communicated to all employees during training.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Source: Cal/OSHA Workplace Violence Prevention Fact Sheet – reporting procedures
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger className="text-left">
                What training does SB 553 require, and who must receive it?
              </AccordionTrigger>
              <AccordionContent>
                <p>SB 553 requires comprehensive workplace violence prevention training for all employees:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    Initial training must be provided to all current employees by January 1, 2025 (within 6 months of
                    the July 1, 2024 effective date)
                  </li>
                  <li>New employees must receive training when hired</li>
                  <li>Additional training is required when new workplace violence hazards are identified</li>
                  <li>Refresher training must be provided at least annually</li>
                </ul>
                <p className="mt-2">
                  Training content must include: explanation of the WVPP, how to report incidents, warning signs of
                  workplace violence, employer's response procedures, and specific workplace risk factors. Training must
                  be provided in languages understood by employees.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Source: Cal/OSHA Workplace Violence Prevention Fact Sheet – training requirements
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13">
              <AccordionTrigger className="text-left">
                Does SB 553 training apply to remote or out‑of‑state employees?
              </AccordionTrigger>
              <AccordionContent>
                <p>SB 553 training requirements apply to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>All employees physically working in California, including remote workers based in California</li>
                  <li>California-based employees who occasionally travel out of state</li>
                </ul>
                <p className="mt-2">
                  For employees who never work in California, the requirements are less clear, but best practices
                  suggest:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    Including out-of-state employees who interact with California operations in your training program
                  </li>
                  <li>
                    Providing training to any employee who might temporarily work in or visit California worksites
                  </li>
                  <li>Developing remote-specific training modules that address unique risks of remote work</li>
                </ul>
                <p className="mt-2">
                  Remote workers based in California must receive training tailored to their work environment, including
                  home office safety considerations.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Source: Cal/OSHA Workplace Violence Prevention Fact Sheet – geographic scope
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14">
              <AccordionTrigger className="text-left">
                What penalties can Cal/OSHA impose for non‑compliance?
              </AccordionTrigger>
              <AccordionContent>
                <p>Cal/OSHA can impose significant penalties for SB 553 non-compliance:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Regulatory violations: up to $13,653 per violation</li>
                  <li>General violations: up to $13,653 per violation</li>
                  <li>Serious violations: up to $25,000 per violation</li>
                  <li>Willful or repeat violations: up to $136,532 per violation</li>
                </ul>
                <p className="mt-2">
                  Each instance of non-compliance can be cited separately. For example, failing to train 10 employees
                  could potentially result in 10 separate citations. Additionally, Cal/OSHA can issue Orders to Take
                  Special Action requiring immediate abatement of hazards.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Source: Cal/OSHA "Workplace Violence Prevention Laws in General Industry" – penalty ranges
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15">
              <AccordionTrigger className="text-left">
                Does SB 553 require specific workplace postings or notices?
              </AccordionTrigger>
              <AccordionContent>
                <p>While SB 553 doesn't mandate a specific workplace violence prevention poster, it does require:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>The WVPP must be posted or readily accessible to employees at all times</li>
                  <li>Information about how to report workplace violence concerns must be prominently displayed</li>
                  <li>Emergency contact information must be clearly posted</li>
                  <li>Procedures for summoning assistance during an incident must be communicated</li>
                </ul>
                <p className="mt-2">
                  Best practices include creating a dedicated WVPP information board or section on existing safety
                  boards, and including reporting procedures in employee handbooks and digital communication platforms.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Source: Cal/OSHA Workplace Violence Prevention Fact Sheet – communication and posting guidance
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
