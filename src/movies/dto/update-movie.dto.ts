import { PartialType } from '@nestjs/mapped-types';
import { CreateMoiveDto } from './create-movie.dto';

export class updateMovieDto extends PartialType(CreateMoiveDto) {}
