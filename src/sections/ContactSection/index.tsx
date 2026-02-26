/** @format */

import emailjs from '@emailjs/browser';
import { type FunctionComponent } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { NavigationBar, Button } from '../../components';
import {
  CONTACT_ME_INPUTS,
  type Inputs,
} from '../../static/constant/data/ContactMeInput';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface contactProps {}

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'whw880218we@email.com',
    href: 'mailto:whw880218we@email.com',
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/wuharry',
    href: 'https://github.com/wuharry',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com',
    href: 'https://www.linkedin.com/in/%E6%B5%A9%E7%B6%AD-%E5%90%B3-251289232/',
    icon: Linkedin,
  },
];

const Contact: FunctionComponent<contactProps> = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const sendEmailHandler: SubmitHandler<Inputs> = (data) => {
    emailjs
      .send(
        'service_4ma43h6',
        'template_rkh0dkg',
        {
          from_name: data.Name,
          to_name: 'Wu.Harvey',
          message: data.Message,
          reply_to: data.Email,
          subject: data.Subject,
        },
        'NudTZXCk8kRq5mPQH',
      )
      .then(
        (_result) => {
          alert('Email sent successfully!');
          window.location.reload();
        },
        (_error) => {
          alert('Failed to send email. Please try again later.');
        },
      );
  };

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24">
      {/* 標題 */}
      <div className="mb-12 flex items-center gap-4">
        <h2 className="text-primary shrink-0 text-sm font-semibold tracking-widest uppercase">
          聯絡方式
        </h2>
        <div className="bg-border/60 h-px flex-1" />
      </div>

      <div className="grid gap-16 lg:grid-cols-2">
        {/* 左側：說明 + 連結 */}
        <div className="space-y-8">
          <div>
            <h3 className="text-foreground mb-2 text-4xl font-semibold">
              Contact
            </h3>
            <h3 className="text-primary mb-4 text-4xl font-semibold">Me</h3>
            <p className="text-muted-foreground leading-relaxed">
              目前正在尋找新的機會。無論是合作邀請還是只是打個招呼，都歡迎隨時聯繫我！
            </p>
          </div>

          <div className="space-y-3">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  link.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="group border-border bg-card/50 hover:border-primary/30 hover:bg-card/80 flex items-center gap-4 rounded-xl border p-5 transition-all duration-300"
              >
                <div className="bg-primary/10 text-primary group-hover:bg-primary/20 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors">
                  <link.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
                    {link.label}
                  </p>
                  <p className="text-foreground truncate text-sm">
                    {link.value}
                  </p>
                </div>
                <ArrowUpRight className="text-muted-foreground group-hover:text-primary h-4 w-4 shrink-0 opacity-0 transition-all group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>

        {/* 右側：表單 */}
        <div className="border-border bg-card/50 flex flex-col justify-center rounded-xl border p-8 backdrop-blur-md">
          {/* 2. 新增表單區塊的標題與說明 */}
          <div className="mb-8">
            <h4 className="text-foreground mb-2 text-2xl font-bold">
              直接聯繫我
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              請填寫下方表單，您的訊息將會直接發送至我的個人信箱，我會在看到後盡快回覆您。
            </p>
          </div>

          <form onSubmit={handleSubmit(sendEmailHandler)} className="space-y-5">
            {CONTACT_ME_INPUTS.map((input) => (
              <div key={input.name} className="space-y-2">
                <Label
                  htmlFor={input.name}
                  className="text-muted-foreground text-sm font-medium"
                >
                  {input.label}
                </Label>

                {input.type === 'text' || input.type === 'email' ? (
                  <Input
                    id={input.name}
                    type={input.type}
                    placeholder={`Enter your ${input.name}`}
                    className="bg-background/50" // 加上一點背景色層次
                    {...register(input.name, {
                      required: true,
                      pattern:
                        input.type === 'email' ? /^\S+@\S+$/i : undefined,
                    })}
                  />
                ) : (
                  <Textarea
                    id={input.name}
                    placeholder={`Enter your ${input.name}`}
                    className="bg-background/50 min-h-[120px] resize-none" // 設定最小高度並禁止手動縮放
                    {...register('Message')}
                  />
                )}
              </div>
            ))}

            {/* 3. 移除無用的 onClick={() => {}} */}
            <Button type="submit" className="mt-4 h-11 w-full text-base">
              送出訊息
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
