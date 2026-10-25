// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Revolt.',
		aboutText:
			'Navigating grid access risks for BESS, renewables, and data centres through expert strategy and execution.',
		logo: {
			src: '/src/assets/logo.png',
			alt: 'Revolt logo',
			text: ''
		}
	},
	footerColumns: [
		{
			category: 'Explore',
			subCategories: [
				{
					subCategory: 'GridScore',
					subCategoryLink: '/gridscore'
				},
				{
					subCategory: 'Advisory',
					subCategoryLink: '/grid-strategy'
				},
				{
					subCategory: 'Blog',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'About us',
					subCategoryLink: '/about-us'
				}
			]
		},
		{
			category: 'Legal Terms',
			subCategories: [
				{
					subCategory: 'General Terms (AGB)',
					subCategoryLink: '/terms'
				},
				{
					subCategory: 'Platform Terms (Grid Workspace)',
					subCategoryLink: '/platform-terms'
				},
				{
					subCategory: 'Privacy Policy',
					subCategoryLink: '/privacy-policy'
				},
				{
					subCategory: 'Impressum',
					subCategoryLink: '/impressum'
				}
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				}
				// {
				// 	subCategory: 'Support',
				// 	subCategoryLink: '/contact'
				// },
				// {
				// 	subCategory: 'Join us',
				// 	subCategoryLink: '/contact'
				// }
			]
		}
	],
	subFooter: {
		copywriteText: '© Revolt Energy 2026.'
	}
}
