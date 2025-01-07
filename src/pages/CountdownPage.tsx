import CountdownItem from '@/components/CountdownItem';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { HeartSpinner } from 'react-spinners-kit';
import { Button } from '@/components/ui/button';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email' }),
});

const CountdownPage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<JSX.Element | null>(null);
  const [message, setMessage] = useState<JSX.Element | null>(null);
  const [showLoader, setShowLoader] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const date = new Date();
  const now = date.toLocaleDateString();

  // For email confirmation
  const emailConfirmTemp = `<head>
    <style>
        /* Reset styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* General email styles */
        body {
            background-color: #8492a6;
            font-family: Arial, sans-serif;
            line-height: 1.6;
            padding: 20px;
            text-align: center;
            /* Center-align text */
        }

        .email-container {
            max-width: 600px;
            margin: 0 auto;
            /* Center the email on the page */
            background-color: #800000;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        h2 {
            color: #fff;
            font-size: 24px;
            margin-bottom: 15px;
            text-align: center;
        }

        h3 {
            color: #fff;
        }

        p {
            font-size: 16px;
            color: #fff;
            margin-bottom: 20px;
            font-weight: normal;
        }

        .buttonConfirm {
            display: inline-block;
            padding: 10px 20px;
            background-color: #e98c31;
            color: #ffffff;
            text-decoration: none;
            border-radius: 4px;
            font-size: 16px;
            font-weight: bold;
        }

        .buttonConfirm:hover {
            background-color: #B56D25;
        }

        /* Responsive design for mobile */
        @media (max-width: 600px) {
            .email-container {
                width: 100%;
                padding: 15px;
            }

            h2 {
                font-size: 20px;
            }

            p {
                font-size: 14px;
            }

            a {
                font-size: 14px;
            }
        }
    </style>
</head>

<body>
    <div class="email-container">
        <h3>This is a notification</h2>
        <h2>🫶🏾🫶🏾🫶🏾 Halo, Lisa! 🫶🏾🫶🏾🫶🏾</h2>
        <p>Kamu bakal diberi tahu melalui email ini saat hitungan mundur hampir berakhir! Ejaa Sayang Lisa!</p>
    </div>

</body>`;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '' },
  });

  const sendEmail = async (email: any, template: any) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, template }),
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error sending email:', error);
      return error;
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setShowLoader(true);
    try {
      console.log(values);
      const res = await sendEmail(values.email, emailConfirmTemp);
      if (res.data) {
        localStorage.setItem('emailSent', 'true');
        localStorage.setItem('emailAdd', values.email);
        setEmailSent(true); // Hide Notify Me button
        setMessage(
          <p className='text-lg text-center font-medium text-white'>
            Email Terkirim, Nengg! Nanti Kamu Bakalan Dapet Notif yaa!🫶🏾
          </p>
        );
        console.log('Email Sent! You will be notified soon!');
      } else {
        setMessage(null);
        setError(
          <p className='text-sm text-center font-medium text-red-500'>
            Maaf, Kayaknya ada kesalahan deh😔
          </p>
        );
        setTimeout(() => setError(null), 8000);
        throw res.error;
      }
    } catch (error) {
      console.error(error);
    } finally {
      form.reset();
      setShowLoader(false);
      setOpenDialog(false);
    }
  };

  useEffect(() => {
    const sentEmail = localStorage.getItem('emailSent') === 'true';
    if (sentEmail) {
      setEmailSent(true);
    }

    const herName = localStorage.getItem('HerName');
    if (
      herName === 'lisa' ||
      herName === 'ardeliana' ||
      herName === 'lisa arde' ||
      herName === 'lisa ardeliana'
    ) {
      navigate('/wait');
    } else {
      navigate('/');
    }

    // if (birthday === 'true') {
    //     navigate('/happy-birthday')
    // }
    if (now === '01/07/2025') {
      navigate('/happy-birthday');
    }
  }, [navigate]);

  return (
    <section className='h-screen flex flex-col justify-center items-center bg-gradient-to-t from-rose-900 via-pink-800 to-rose-900'>
      <h1 className='text-3xl md:text-6xl font-bold text-white mb-4'>
        Alooww! Maaf Yaa Telat 😅
      </h1>
      <h1 className='text-lg md:text-2xl font-medium text-white'>
        Coba Balik Lagi Nanti
      </h1>
      <div className='shadow-xl my-2 md:my-4 rounded-xl border-4 md:border-8 py-2 md:py-5 border-black flex w-80 md:w-full max-w-5xl items-center bg-white'>
        <CountdownItem unit='Day' text='Hari' />
        <CountdownItem unit='Hour' text='Jam' />
        <CountdownItem unit='Minute' text='Menit' />
        <CountdownItem unit='Second' text='Detik' />
      </div>
      {!emailSent ? (
        <Dialog
          open={openDialog}
          onOpenChange={() => setOpenDialog(!openDialog)}
        >
          <DialogTrigger className='px-4 py-3 bg-rose-950 hover:bg-pink-900 hover:scale-110 border-2 border-pink-200 font-body rounded-xl text-white text-xl my-4 flex justify-center items-center gap-2'>
            <span className='flex justify-center items-center gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-5'
              >
                <path d='M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z' />
                <path
                  fillRule='evenodd'
                  d='M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z'
                  clipRule='evenodd'
                />
              </svg>
              Pesan Aku
            </span>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Aku Butuh Email Kamu Nihh</DialogTitle>
              <DialogDescription>
                Masukkan email kamu dan pemberitahuan bakal dikirimkan pada saat
                hitungan mundur hampir habis.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='space-y-8'
              >
                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Alamat Email</FormLabel>
                      <FormControl>
                        <Input placeholder='youremail@email.com' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {error}
                <HeartSpinner color='#FF0000' loading={showLoader} />
                {!showLoader && (
                  <Button
                    type='submit'
                    disabled={
                      !form.formState.isDirty || !form.formState.isValid
                    }
                  >
                    Kirimkan
                  </Button>
                )}
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      ) : (
        <>{message}</>
      )}

      <h1 className='text-md mt-5 font-light text-slate-300'>
        Prepared by Kurt 😉😘
      </h1>
    </section>
  );
};

export default CountdownPage;
