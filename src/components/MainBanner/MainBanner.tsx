import Image from "next/image"
import Button from "@/ui/Button/Button"
import Text from "@/ui/Text/Text"
import styles from "./MainBanner.module.scss"
import Heading from "@/ui/Heading/Heading"

function MainBanner() {
  return (
    <div className={ styles.root }>
      <div className={ styles.content }>
        <Heading className={ styles.title } hlevel="h1">
          A <span>unique</span> approach to learning foreign languages online
        </Heading>
        <Text className={ styles.description } font="font18">
          Learn at your own pace, with lifetime access on mobile and desktop
        </Text>
        <Button>Get started</Button>
      </div>
      <Image src="/images/main-banner.png" alt="Lingua" width={ 684 } height={ 690 } />
    </div>
  )
}

export default MainBanner
