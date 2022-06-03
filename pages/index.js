import Head from 'next/head'
import Image from 'next/image'
import { ResponsiveNavBar } from '../components/ResponsiveNavbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joshua Alexander</title>
        <meta name='description' content='A developer portfolio made by/for Joshua Alexander' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <ResponsiveNavBar />
        <div className='-z-50 w-full h-screen overflow-hidden absolute -mt-16'>
          <Image alt='background' src={require('../public/pngegg.png')} layout='fill' objectFit='cover' quality={100} />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus erat, suscipit non varius ut, fermentum
            id lectus. Vestibulum congue ligula lectus, vitae vestibulum enim pellentesque in. Quisque sagittis
            dignissim orci, a hendrerit dolor molestie sed. Nulla sapien dolor, fermentum quis porttitor sit amet,
            accumsan porttitor nunc. Aenean posuere ac diam a finibus. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Nunc mollis eros non nibh dignissim porta. Mauris consectetur et
            velit at accumsan. Aliquam aliquet velit et odio placerat, sit amet facilisis velit ullamcorper. Curabitur
            vulputate varius lacinia. Sed lobortis interdum lorem, nec eleifend urna elementum ultrices. Nam dapibus
            mauris vel iaculis consequat. Praesent et accumsan neque. Donec consectetur in purus a accumsan. Duis eu
            erat vel leo volutpat ullamcorper id ut eros. Quisque sit amet augue in libero commodo ultrices. Vivamus
            dictum dignissim magna, vitae pellentesque ex blandit ut. Aliquam erat volutpat. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Donec tempor luctus arcu vehicula
            volutpat. Quisque ut justo et dui mattis consectetur a nec arcu. Ut sed leo pellentesque, lacinia risus
            quis, congue augue. Duis semper porta est, ac dignissim erat mollis eget. Sed eget laoreet turpis, eu
            porttitor purus. Morbi magna purus, lacinia vitae diam id, vehicula egestas lacus. Aenean non condimentum
            purus, nec porta diam. Maecenas vehicula semper sapien. Phasellus sodales finibus ullamcorper. Phasellus at
            iaculis eros. Suspendisse erat enim, sagittis et porta ut, faucibus quis lectus. Quisque pulvinar porta
            elit, quis mollis nisi pulvinar vitae. Vivamus nisi justo, ultricies eget tortor ac, ornare pretium ex. In
            sit amet turpis sit amet sem commodo venenatis et id lorem. Fusce nec ullamcorper orci. Maecenas dapibus
            pellentesque pharetra. Vestibulum malesuada semper lorem, sed ullamcorper tellus volutpat ac. Integer
            interdum est eget congue tempor. Vivamus euismod ligula nec nisl ultrices, a congue nibh malesuada.
            Pellentesque porta ac orci eget tincidunt. Aenean nibh nisi, congue nec molestie at, eleifend nec nisi. Duis
            at tortor scelerisque, pulvinar arcu sit amet, auctor elit. Sed auctor pulvinar volutpat. Nulla et nisl in
            lectus malesuada faucibus vel ut nulla. Pellentesque sit amet erat ornare, hendrerit augue sed, feugiat
            arcu. Suspendisse vel quam nec eros fermentum tristique vel id est. Morbi id turpis vitae turpis porttitor
            egestas. Proin interdum sit amet metus quis rutrum. Proin faucibus dictum ligula, eget efficitur nibh. In
            quis neque nec enim lobortis interdum sed in libero. Proin blandit nisi a augue egestas, quis rhoncus mi
            consectetur. Mauris sed tincidunt libero. Quisque rhoncus metus at tempor feugiat. Aenean rhoncus massa
            mauris, in iaculis diam luctus eu. Quisque venenatis laoreet nibh ac facilisis. Vivamus vitae imperdiet
            nisl. Phasellus lorem quam, feugiat vel lacus gravida, pharetra sagittis velit. Mauris elementum velit
            velit, id eleifend tortor tempor eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            mattis diam felis, in lobortis ante molestie ac. Nunc eu tellus imperdiet, pretium nisl non, mattis nulla.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus erat, suscipit non varius ut, fermentum
            id lectus. Vestibulum congue ligula lectus, vitae vestibulum enim pellentesque in. Quisque sagittis
            dignissim orci, a hendrerit dolor molestie sed. Nulla sapien dolor, fermentum quis porttitor sit amet,
            accumsan porttitor nunc. Aenean posuere ac diam a finibus. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Nunc mollis eros non nibh dignissim porta. Mauris consectetur et
            velit at accumsan. Aliquam aliquet velit et odio placerat, sit amet facilisis velit ullamcorper. Curabitur
            vulputate varius lacinia. Sed lobortis interdum lorem, nec eleifend urna elementum ultrices. Nam dapibus
            mauris vel iaculis consequat. Praesent et accumsan neque. Donec consectetur in purus a accumsan. Duis eu
            erat vel leo volutpat ullamcorper id ut eros. Quisque sit amet augue in libero commodo ultrices. Vivamus
            dictum dignissim magna, vitae pellentesque ex blandit ut. Aliquam erat volutpat. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Donec tempor luctus arcu vehicula
            volutpat. Quisque ut justo et dui mattis consectetur a nec arcu. Ut sed leo pellentesque, lacinia risus
            quis, congue augue. Duis semper porta est, ac dignissim erat mollis eget. Sed eget laoreet turpis, eu
            porttitor purus. Morbi magna purus, lacinia vitae diam id, vehicula egestas lacus. Aenean non condimentum
            purus, nec porta diam. Maecenas vehicula semper sapien. Phasellus sodales finibus ullamcorper. Phasellus at
            iaculis eros. Suspendisse erat enim, sagittis et porta ut, faucibus quis lectus. Quisque pulvinar porta
            elit, quis mollis nisi pulvinar vitae. Vivamus nisi justo, ultricies eget tortor ac, ornare pretium ex. In
            sit amet turpis sit amet sem commodo venenatis et id lorem. Fusce nec ullamcorper orci. Maecenas dapibus
            pellentesque pharetra. Vestibulum malesuada semper lorem, sed ullamcorper tellus volutpat ac. Integer
            interdum est eget congue tempor. Vivamus euismod ligula nec nisl ultrices, a congue nibh malesuada.
            Pellentesque porta ac orci eget tincidunt. Aenean nibh nisi, congue nec molestie at, eleifend nec nisi. Duis
            at tortor scelerisque, pulvinar arcu sit amet, auctor elit. Sed auctor pulvinar volutpat. Nulla et nisl in
            lectus malesuada faucibus vel ut nulla. Pellentesque sit amet erat ornare, hendrerit augue sed, feugiat
            arcu. Suspendisse vel quam nec eros fermentum tristique vel id est. Morbi id turpis vitae turpis porttitor
            egestas. Proin interdum sit amet metus quis rutrum. Proin faucibus dictum ligula, eget efficitur nibh. In
            quis neque nec enim lobortis interdum sed in libero. Proin blandit nisi a augue egestas, quis rhoncus mi
            consectetur. Mauris sed tincidunt libero. Quisque rhoncus metus at tempor feugiat. Aenean rhoncus massa
            mauris, in iaculis diam luctus eu. Quisque venenatis laoreet nibh ac facilisis. Vivamus vitae imperdiet
            nisl. Phasellus lorem quam, feugiat vel lacus gravida, pharetra sagittis velit. Mauris elementum velit
            velit, id eleifend tortor tempor eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            mattis diam felis, in lobortis ante molestie ac. Nunc eu tellus imperdiet, pretium nisl non, mattis nulla.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus erat, suscipit non varius ut, fermentum
            id lectus. Vestibulum congue ligula lectus, vitae vestibulum enim pellentesque in. Quisque sagittis
            dignissim orci, a hendrerit dolor molestie sed. Nulla sapien dolor, fermentum quis porttitor sit amet,
            accumsan porttitor nunc. Aenean posuere ac diam a finibus. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Nunc mollis eros non nibh dignissim porta. Mauris consectetur et
            velit at accumsan. Aliquam aliquet velit et odio placerat, sit amet facilisis velit ullamcorper. Curabitur
            vulputate varius lacinia. Sed lobortis interdum lorem, nec eleifend urna elementum ultrices. Nam dapibus
            mauris vel iaculis consequat. Praesent et accumsan neque. Donec consectetur in purus a accumsan. Duis eu
            erat vel leo volutpat ullamcorper id ut eros. Quisque sit amet augue in libero commodo ultrices. Vivamus
            dictum dignissim magna, vitae pellentesque ex blandit ut. Aliquam erat volutpat. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Donec tempor luctus arcu vehicula
            volutpat. Quisque ut justo et dui mattis consectetur a nec arcu. Ut sed leo pellentesque, lacinia risus
            quis, congue augue. Duis semper porta est, ac dignissim erat mollis eget. Sed eget laoreet turpis, eu
            porttitor purus. Morbi magna purus, lacinia vitae diam id, vehicula egestas lacus. Aenean non condimentum
            purus, nec porta diam. Maecenas vehicula semper sapien. Phasellus sodales finibus ullamcorper. Phasellus at
            iaculis eros. Suspendisse erat enim, sagittis et porta ut, faucibus quis lectus. Quisque pulvinar porta
            elit, quis mollis nisi pulvinar vitae. Vivamus nisi justo, ultricies eget tortor ac, ornare pretium ex. In
            sit amet turpis sit amet sem commodo venenatis et id lorem. Fusce nec ullamcorper orci. Maecenas dapibus
            pellentesque pharetra. Vestibulum malesuada semper lorem, sed ullamcorper tellus volutpat ac. Integer
            interdum est eget congue tempor. Vivamus euismod ligula nec nisl ultrices, a congue nibh malesuada.
            Pellentesque porta ac orci eget tincidunt. Aenean nibh nisi, congue nec molestie at, eleifend nec nisi. Duis
            at tortor scelerisque, pulvinar arcu sit amet, auctor elit. Sed auctor pulvinar volutpat. Nulla et nisl in
            lectus malesuada faucibus vel ut nulla. Pellentesque sit amet erat ornare, hendrerit augue sed, feugiat
            arcu. Suspendisse vel quam nec eros fermentum tristique vel id est. Morbi id turpis vitae turpis porttitor
            egestas. Proin interdum sit amet metus quis rutrum. Proin faucibus dictum ligula, eget efficitur nibh. In
            quis neque nec enim lobortis interdum sed in libero. Proin blandit nisi a augue egestas, quis rhoncus mi
            consectetur. Mauris sed tincidunt libero. Quisque rhoncus metus at tempor feugiat. Aenean rhoncus massa
            mauris, in iaculis diam luctus eu. Quisque venenatis laoreet nibh ac facilisis. Vivamus vitae imperdiet
            nisl. Phasellus lorem quam, feugiat vel lacus gravida, pharetra sagittis velit. Mauris elementum velit
            velit, id eleifend tortor tempor eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            mattis diam felis, in lobortis ante molestie ac. Nunc eu tellus imperdiet, pretium nisl non, mattis nulla.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus erat, suscipit non varius ut, fermentum
            id lectus. Vestibulum congue ligula lectus, vitae vestibulum enim pellentesque in. Quisque sagittis
            dignissim orci, a hendrerit dolor molestie sed. Nulla sapien dolor, fermentum quis porttitor sit amet,
            accumsan porttitor nunc. Aenean posuere ac diam a finibus. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Nunc mollis eros non nibh dignissim porta. Mauris consectetur et
            velit at accumsan. Aliquam aliquet velit et odio placerat, sit amet facilisis velit ullamcorper. Curabitur
            vulputate varius lacinia. Sed lobortis interdum lorem, nec eleifend urna elementum ultrices. Nam dapibus
            mauris vel iaculis consequat. Praesent et accumsan neque. Donec consectetur in purus a accumsan. Duis eu
            erat vel leo volutpat ullamcorper id ut eros. Quisque sit amet augue in libero commodo ultrices. Vivamus
            dictum dignissim magna, vitae pellentesque ex blandit ut. Aliquam erat volutpat. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Donec tempor luctus arcu vehicula
            volutpat. Quisque ut justo et dui mattis consectetur a nec arcu. Ut sed leo pellentesque, lacinia risus
            quis, congue augue. Duis semper porta est, ac dignissim erat mollis eget. Sed eget laoreet turpis, eu
            porttitor purus. Morbi magna purus, lacinia vitae diam id, vehicula egestas lacus. Aenean non condimentum
            purus, nec porta diam. Maecenas vehicula semper sapien. Phasellus sodales finibus ullamcorper. Phasellus at
            iaculis eros. Suspendisse erat enim, sagittis et porta ut, faucibus quis lectus. Quisque pulvinar porta
            elit, quis mollis nisi pulvinar vitae. Vivamus nisi justo, ultricies eget tortor ac, ornare pretium ex. In
            sit amet turpis sit amet sem commodo venenatis et id lorem. Fusce nec ullamcorper orci. Maecenas dapibus
            pellentesque pharetra. Vestibulum malesuada semper lorem, sed ullamcorper tellus volutpat ac. Integer
            interdum est eget congue tempor. Vivamus euismod ligula nec nisl ultrices, a congue nibh malesuada.
            Pellentesque porta ac orci eget tincidunt. Aenean nibh nisi, congue nec molestie at, eleifend nec nisi. Duis
            at tortor scelerisque, pulvinar arcu sit amet, auctor elit. Sed auctor pulvinar volutpat. Nulla et nisl in
            lectus malesuada faucibus vel ut nulla. Pellentesque sit amet erat ornare, hendrerit augue sed, feugiat
            arcu. Suspendisse vel quam nec eros fermentum tristique vel id est. Morbi id turpis vitae turpis porttitor
            egestas. Proin interdum sit amet metus quis rutrum. Proin faucibus dictum ligula, eget efficitur nibh. In
            quis neque nec enim lobortis interdum sed in libero. Proin blandit nisi a augue egestas, quis rhoncus mi
            consectetur. Mauris sed tincidunt libero. Quisque rhoncus metus at tempor feugiat. Aenean rhoncus massa
            mauris, in iaculis diam luctus eu. Quisque venenatis laoreet nibh ac facilisis. Vivamus vitae imperdiet
            nisl. Phasellus lorem quam, feugiat vel lacus gravida, pharetra sagittis velit. Mauris elementum velit
            velit, id eleifend tortor tempor eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            mattis diam felis, in lobortis ante molestie ac. Nunc eu tellus imperdiet, pretium nisl non, mattis nulla.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lectus erat, suscipit non varius ut, fermentum
            id lectus. Vestibulum congue ligula lectus, vitae vestibulum enim pellentesque in. Quisque sagittis
            dignissim orci, a hendrerit dolor molestie sed. Nulla sapien dolor, fermentum quis porttitor sit amet,
            accumsan porttitor nunc. Aenean posuere ac diam a finibus. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Nunc mollis eros non nibh dignissim porta. Mauris consectetur et
            velit at accumsan. Aliquam aliquet velit et odio placerat, sit amet facilisis velit ullamcorper. Curabitur
            vulputate varius lacinia. Sed lobortis interdum lorem, nec eleifend urna elementum ultrices. Nam dapibus
            mauris vel iaculis consequat. Praesent et accumsan neque. Donec consectetur in purus a accumsan. Duis eu
            erat vel leo volutpat ullamcorper id ut eros. Quisque sit amet augue in libero commodo ultrices. Vivamus
            dictum dignissim magna, vitae pellentesque ex blandit ut. Aliquam erat volutpat. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas. Donec tempor luctus arcu vehicula
            volutpat. Quisque ut justo et dui mattis consectetur a nec arcu. Ut sed leo pellentesque, lacinia risus
            quis, congue augue. Duis semper porta est, ac dignissim erat mollis eget. Sed eget laoreet turpis, eu
            porttitor purus. Morbi magna purus, lacinia vitae diam id, vehicula egestas lacus. Aenean non condimentum
            purus, nec porta diam. Maecenas vehicula semper sapien. Phasellus sodales finibus ullamcorper. Phasellus at
            iaculis eros. Suspendisse erat enim, sagittis et porta ut, faucibus quis lectus. Quisque pulvinar porta
            elit, quis mollis nisi pulvinar vitae. Vivamus nisi justo, ultricies eget tortor ac, ornare pretium ex. In
            sit amet turpis sit amet sem commodo venenatis et id lorem. Fusce nec ullamcorper orci. Maecenas dapibus
            pellentesque pharetra. Vestibulum malesuada semper lorem, sed ullamcorper tellus volutpat ac. Integer
            interdum est eget congue tempor. Vivamus euismod ligula nec nisl ultrices, a congue nibh malesuada.
            Pellentesque porta ac orci eget tincidunt. Aenean nibh nisi, congue nec molestie at, eleifend nec nisi. Duis
            at tortor scelerisque, pulvinar arcu sit amet, auctor elit. Sed auctor pulvinar volutpat. Nulla et nisl in
            lectus malesuada faucibus vel ut nulla. Pellentesque sit amet erat ornare, hendrerit augue sed, feugiat
            arcu. Suspendisse vel quam nec eros fermentum tristique vel id est. Morbi id turpis vitae turpis porttitor
            egestas. Proin interdum sit amet metus quis rutrum. Proin faucibus dictum ligula, eget efficitur nibh. In
            quis neque nec enim lobortis interdum sed in libero. Proin blandit nisi a augue egestas, quis rhoncus mi
            consectetur. Mauris sed tincidunt libero. Quisque rhoncus metus at tempor feugiat. Aenean rhoncus massa
            mauris, in iaculis diam luctus eu. Quisque venenatis laoreet nibh ac facilisis. Vivamus vitae imperdiet
            nisl. Phasellus lorem quam, feugiat vel lacus gravida, pharetra sagittis velit. Mauris elementum velit
            velit, id eleifend tortor tempor eu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            mattis diam felis, in lobortis ante molestie ac. Nunc eu tellus imperdiet, pretium nisl non, mattis nulla.
          </p>
        </div>
      </div>
    </div>
  )
}
