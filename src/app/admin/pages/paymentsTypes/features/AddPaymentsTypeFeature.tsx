import CollapseComponent from '../../../../../common/components/CollapseComponent'
import { TRANSLATE } from '../../../../../common/constants/TranslateConstants'
import usePageTitle from '../../../../../common/hooks/usePageTitle'
import { useTranslate } from '../../../../../common/hooks/useTranslate'

export default function AddPaymentsTypeFeature() {
    const { titleWithoutLetterS } = usePageTitle()
    const { translate } = useTranslate()

    return (
        <CollapseComponent title={`${translate(TRANSLATE.ADD)} ${titleWithoutLetterS}`}>
            <div className='hero py-5 bg-base-200'>
                <div className='hero-content text-center'>
                    <div className='max-w-md'>
                        <h1 className='text-5xl font-bold'>Hello there</h1>
                        <p className='py-6'>
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                            et a id nisi.
                        </p>
                        <button className='btn btn-primary'>Get Started</button>
                    </div>
                </div>
            </div>
        </CollapseComponent>
    )
}
