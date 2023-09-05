// import { TeamList } from "@/components/TeamList";
// import useGetSignUps, { NetworkTeam } from "@/hooks/useGetSignUpsMaster";
// interface ClassSectionProps {
//   title: string;
//   teams: NetworkTeam[];
// }

// const ClassSection: React.FC<ClassSectionProps> = ({
//   title = "Class",
//   teams,
// }) => {
//   const colors = useColors();
//   return (
//     <View>
//       <View style={styles.classSectionHeader}>
//         <Text style={[styles.classSectionHeaderTitle, { color: colors.text }]}>
//           {title}
//         </Text>
//       </View>
//       <TeamList
//         scrollEnabled={false}
//         style={[
//           styles.teamList,
//           {
//             backgroundColor: colors.card,
//           },
//         ]}
//         contentContainerStyle={styles.teamListContentContainer}
//         teams={teams.map(({ drivers, ...item }) => ({
//           ...item,
//           data: [drivers],
//         }))}
//       />
//     </View>
//   );
// };
