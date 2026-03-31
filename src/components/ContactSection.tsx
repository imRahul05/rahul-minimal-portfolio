import { motion } from 'framer-motion';
import {
  ArrowUpRight as ArrowUpRightIcon,
  Mail as MailIcon,
  MapPin as MapPinIcon,
  Phone as PhoneIcon } from
'lucide-react';
import { portfolioData } from '../data/data';

const contactMethods = [
{
  label: 'Email',
  value: portfolioData.personal.email,
  href: `mailto:${portfolioData.personal.email}`,
  icon: MailIcon
},
{
  label: 'Phone',
  value: portfolioData.personal.phone,
  href: `tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`,
  icon: PhoneIcon
},
{
  label: 'Location',
  value: portfolioData.personal.location,
  href: portfolioData.personal.linkedinUrl,
  icon: MapPinIcon
}];

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-100px'
      }}
      transition={{
        duration: 0.5
      }}
      className="scroll-mt-24 py-6">

      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/60">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-orange-600 dark:text-orange-400">
              Contact Me
            </p>
            <h2 className="max-w-md font-serif text-3xl font-medium text-neutral-900 dark:text-white sm:text-4xl">
              Let&apos;s build something useful and well-crafted.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
              I&apos;m open to frontend, full-stack, and product-focused roles.
              If you have an opportunity, project, or idea worth discussing,
              send a note and I&apos;ll get back to you.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <motion.a
                href={`mailto:${portfolioData.personal.email}`}
                whileHover={{
                  scale: 1.03
                }}
                whileTap={{
                  scale: 0.98
                }}
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400">

                <MailIcon className="h-4 w-4" />
                Send an email
              </motion.a>

              <motion.a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.03
                }}
                whileTap={{
                  scale: 0.98
                }}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-300 dark:hover:bg-neutral-800">

                Message on LinkedIn
                <ArrowUpRightIcon className="h-4 w-4" />
              </motion.a>
            </div>
          </div>

          <div className="space-y-3">
            {contactMethods.map((item) =>
            <a
              key={item.label}
              href={item.href}
              target={item.label === 'Location' ? '_blank' : undefined}
              rel={item.label === 'Location' ? 'noopener noreferrer' : undefined}
              className="group flex items-center justify-between rounded-2xl border border-neutral-200 bg-white px-4 py-4 transition-colors hover:border-orange-200 hover:bg-orange-50/60 dark:border-neutral-800 dark:bg-neutral-950/70 dark:hover:border-orange-500/40 dark:hover:bg-orange-500/10">

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors group-hover:bg-orange-100 group-hover:text-orange-700 dark:bg-neutral-800 dark:text-neutral-300 dark:group-hover:bg-orange-500/20 dark:group-hover:text-orange-300">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    {item.value}
                  </p>
                </div>
              </div>

              <ArrowUpRightIcon className="h-4 w-4 text-neutral-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-600 dark:group-hover:text-orange-400" />
            </a>
            )}
          </div>
        </div>
      </div>

      <div className="my-10 h-px w-full bg-neutral-200 dark:bg-neutral-800" />
    </motion.section>);
}
