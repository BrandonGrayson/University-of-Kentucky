import React from 'react';
import { Box, Text, HStack, VStack, Link } from '@chakra-ui/react';

export default function Footer() {
	return (
		<Box bg="brand.900" mt="35vh" minH="150px" h="11em" d="flex" alignItems="center" alignContent="flex-end">
			<Box w="100%" d="flex" justifyContent="center" alignContent="center">
				<VStack>
					<Text fontWeight="400" fontSize="4xl">
						University of Kentucky
					</Text>

					<Box d="flex" flexDirection="row">
						<HStack spacing="1em">
							<Box>
								<Link>An Equal Opportunity University</Link>
							</Box>
							<Box>
								<Text>|</Text>
							</Box>
							<Box>
								<Link>Accreditation</Link>
							</Box>
							<Box>
								<Text>|</Text>
							</Box>
							<Box>
								<Link>Directory</Link>
							</Box>
							<Box>
								<Text>|</Text>
							</Box>
							<Box>
								<Link>Email</Link>
							</Box>
							<Box>
								<Text>|</Text>
							</Box>
							<Box>
								<Link>Privacy Policy</Link>
							</Box>
							<Box>
								<Text>|</Text>
							</Box>
							<Box>
								<Link>Accessibility</Link>
							</Box>
						</HStack>
					</Box>
					<Box>
						<HStack spacing="1em">
							<Box>
								<Link>University of Kentucky</Link>
							</Box>
							<Box>
								<Text>|</Text>
							</Box>
							<Box>
								<Link>Lexington, Kentucky</Link>
							</Box>
						</HStack>
					</Box>
				</VStack>
			</Box>
		</Box>
	);
}
