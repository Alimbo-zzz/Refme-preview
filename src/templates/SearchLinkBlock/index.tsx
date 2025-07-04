'use client'
import React from 'react';
import cls from './style.module.scss';
import { LinkCard, TopCompanies } from '@/components';
import { useUI } from '@/UI';

export const SearchLinkBlock = (props: any) => {
	const { Button, Icon } = useUI();


	return (<>
		<div className={`${cls.wrap} container`}>
			<div className={cls.search}></div>
			<div className={cls.top}>
				<div className={cls.top__pin}>
					<TopCompanies />
					<Button w='100%' variant='accent'>Post referral link <Icon name='plus' /></Button>
				</div>
			</div>
			<div className={cls.cards}>
				<LinkCard />
				<LinkCard />
				<LinkCard />
				<LinkCard />
				<LinkCard />
				<LinkCard />
			</div>
		</div>
	</>)
}

export default SearchLinkBlock;